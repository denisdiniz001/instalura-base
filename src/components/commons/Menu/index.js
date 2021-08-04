import Logo from "../../../theme/Logo";
import { Button } from "../Button";
import { MenuWrapper } from "./styles/MenuWrapper";

export default function Menu() {
    const links = [
        {
            texto: "Home",
            url: "/"
        },
        {
            texto: "Perguntas Frequentes",
            url: "/faq"
        },
        {
            texto: "Sobre",
            url: "/sobre"
        }
    ];
  return (
    <MenuWrapper>
        <MenuWrapper.LeftSide>
            <Logo/>
        </MenuWrapper.LeftSide>
        <MenuWrapper.CentralSide>
          {links.map((link, index) => {
              return (
                <li key={index}>
                    <a href={link.url}>{link.texto}</a>
                </li>
              )
          })}
        </MenuWrapper.CentralSide>
        <MenuWrapper.RightSide>
            <Button ghost variant="secondary.main">
                Entrar
            </Button>
            <Button variant="primary.main">
                Cadastrar
            </Button>
        </MenuWrapper.RightSide>
    </MenuWrapper>
  )
}