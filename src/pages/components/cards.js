import { Card, Col } from "react-bootstrap";
import { usePathname } from "next/navigation";

export default function Cards({noticia}) {
    const pathname = usePathname();

    const isHome = pathname === "/";
    return <>
        ${noticia.idnoticia}
    </>
}