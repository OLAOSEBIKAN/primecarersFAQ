import Link from "next/link";

function NavbarItem(props) {
    const {title,url} = props
    return <Link href={url} className="block px-3 py-2 transition hover:text-teal-200">{title}</Link>
}

export default function Nav() {
  return (
    <nav>
        <div className="pt-6 h-16 max-w-fit mx-auto flex justify-center">
            <ul className="flex text-sm font-medium shadow-lg rounded-full bg-black/90 ring-1 ring-zinc-900/5 backdrop-blur px-3">
               <NavbarItem title='FAQ' url='/'/>
               <NavbarItem title='Clients' url='/clients'/>
               <NavbarItem title='Carer' url='/carers'/>
            </ul>   
        </div>
    </nav>
  )
}
