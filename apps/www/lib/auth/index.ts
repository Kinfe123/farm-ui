import { PrismaClient } from '@prisma/client';
import { hash, compare } from 'bcryptjs';
import { sign, verify } from 'jsonwebtoken';
import { cookies } from 'next/headers';

const prisma = new PrismaClient();
const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key';

export type AuthUser = {
  id: string;
  email: string;
  name?: string | null;
  image?: string | null;
};

export type SignUpData = {
  email: string;
  password: string;
  name?: string;
};

export type SignInData = {
  email: string;
  password: string;
};

export class Auth {
  static async signUp(data: SignUpData) {
    const { email, password, name } = data;

    // Check if user exists
    const existingUser = await prisma.user.findUnique({
      where: { email }
    });

    if (existingUser) {
      throw new Error('User already exists');
    }

    // Hash password
    const hashedPassword = await hash(password, 12);

    // Create user
    const user = await prisma.user.create({
      data: {
        email,
        password: hashedPassword,
        name
      }
    });

    // Create session
    const token = await this.createSession(user.id);

    return {
      user: this.sanitizeUser(user),
      token
    };
  }

  static async signIn(data: SignInData) {
    const { email, password } = data;

    // Find user
    const user = await prisma.user.findUnique({
      where: { email }
    });

    if (!user || !user.password) {
      throw new Error('Invalid credentials');
    }

    // Check password
    const isValid = await compare(password, user.password);
    if (!isValid) {
      throw new Error('Invalid credentials');
    }

    // Create session
    const token = await this.createSession(user.id);

    return {
      user: this.sanitizeUser(user),
      token
    };
  }

  static async signOut() {
    const cookieStore = cookies();
    cookieStore.delete('auth-token');
  }

  static async getSession() {
    try {
      const cookieStore = cookies();
      const token = cookieStore.get('auth-token')?.value;

      if (!token) {
        return null;
      }

      const decoded = verify(token, JWT_SECRET) as { userId: string };
      const user = await prisma.user.findUnique({
        where: { id: decoded.userId }
      });

      if (!user) {
        return null;
      }

      return {
        user: this.sanitizeUser(user),
        token
      };
    } catch (error) {
      return null;
    }
  }

  private static async createSession(userId: string) {
    const token = sign({ userId }, JWT_SECRET, { expiresIn: '7d' });
    const cookieStore = cookies();
    cookieStore.set('auth-token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 60 * 60 * 24 * 7 // 7 days
    });
    return token;
  }

  private static sanitizeUser(user: any): AuthUser {
    return {
      id: user.id,
      email: user.email,
      name: user.name,
      image: user.image
    };
  }
} 