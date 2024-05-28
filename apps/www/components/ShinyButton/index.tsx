import Link from "next/link"

import styles from "./button.module.css"

const Shiny = ({to , to_label}: {to:string , to_label: string}) => {
  return (
    <Link href={`/${to}`}>
      <button className={styles.btn}>
        {to_label}

      </button>
    </Link>

  )
}

export default Shiny