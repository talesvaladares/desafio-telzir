import { Container, Label, Table } from './styles';

export function ThirdCardBenefic() {
  return (
    <Container>
      <Label>
        <h1>
          Excepteur sint occa ecat cupidatat
        </h1>
        <p>
          Ut enim ad minim veniam, quis nostrud
          exercitation ullamco laboris nisi ut aliquip ex
          ea commodo consequat.
        </p>
      </Label>
      <Table>
        <table>
          <thead>
            <tr>
              <th>Origem</th>
              <th>Destino</th>
              <th>$/mês</th>
            </tr>
          </thead>
          <tbody>
          <tr>
            <td>011</td>
            <td>016</td>
            <td>1.90</td>
          </tr>
          <tr>
            <td>016</td>
            <td>011</td>
            <td>2.90</td>
          </tr>
          <tr>
            <td>011</td>
            <td>017</td>
            <td>1.70</td>
          </tr>
          <tr>
            <td>017</td>
            <td>011</td>
            <td>2.70</td>
          </tr>
          <tr>
            <td>011</td>
            <td>018</td>
            <td>0.90</td>
          </tr>
          <tr>
            <td style={{border: '0'}}>018</td>
            <td style={{border: '0'}}>011</td>
            <td style={{border: '0'}}>1.90</td>
          </tr>
          </tbody>
        </table>
      </Table>


    </Container>
  )
}