import Link from 'next/link'

export default function NewLink(props) {
    return (
        <Link href={props.href} ><a>{props.children}</a></Link>
    )
}