'use server'
import path from "path";
import { promises as fs } from 'fs';

export const parseIt = (loc: string) => {
    // const joined = path.join(process.cwd() , loc)
    const content = fs.readFile(process.cwd() + `/${loc}.jsx` , 'utf-8')
    console.log({content})
}