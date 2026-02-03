import { Link } from "react-router-dom";

function Footer () {
    return(
     <footer>
        <Link to="/about">Läs mer om oss</Link>
        © 2026 Spelkatalogen AB
        012-345-6789
        Org. 5555-555555
     </footer>
    );

}

export default Footer;