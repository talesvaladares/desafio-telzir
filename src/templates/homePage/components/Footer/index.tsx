import {FooterContainer, FooterContainerContent} from './styles'

export function Footer(){
  return (
    <FooterContainer id="footer">
      <FooterContainerContent>
        <ul>
          <li className="heading">Combo</li>
          <li>Planos</li>
          <li>Atendimentos</li>
          <li>Serviçoes adicionais</li>
        </ul>

        <ul>
          <li className="heading">Celular</li>
          <li>Planos</li>
          <li>Atendimentos</li>
          <li>Serviçoes adicionais</li>
        </ul>

        <ul>
          <li className="heading">Fixo</li>
          <li>Planos</li>
          <li>Atendimentos</li>
          <li>Serviçoes adicionais</li>
        </ul>

        <ul>
          <li className="heading">Sobre</li>
          <li>A empresa</li>
          <li>Franquia</li>
          <li>Sobre nós</li>
        </ul>

        <ul>
          <li className="heading">Comunidade</li>
          <li>Acessibilidade</li>
          <li>Diversidade e pertecimento</li>
          <li>telzir.org</li>
        </ul>
      </FooterContainerContent>
      <p>
          <span><img src="/assets/logo.svg" alt="telzir" /></span> 2021
      </p>
    </FooterContainer>
  );
};
