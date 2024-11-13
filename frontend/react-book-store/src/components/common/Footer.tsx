import logo from "../../assets/Logo.svg";
import styled from "styled-components";

function Footer() {
  return (
    <FooterStyled>
        <h1 className='logo'>
          <img src={logo} alt=""/>
        </h1>
        <div>
          <p>
            copyright(c), 2024, Book Store
          </p>
        </div>
    </FooterStyled>
  );
}

const FooterStyled = styled.footer`
    height: 400px;
    width: 100%;
    margin: 0 auto;
    max-width: ${({ theme }) => theme.layout.width.large};
    border-top: 1px solid ${({ theme }) => theme.color.background};
    padding: 20px 0;
    display: flex;
    justify-content: space-between;
    
    .logo {
        img{
            width: 100px;
        }
    }
    
    .copyright {
        p {
            font-size: 0.75rem;
            color: ${({ theme }) => theme.color.text};
        }
    }
`

export default Footer;