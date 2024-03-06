export default function Results(){
  //add a table to display the results with a column for each of the following: year, investment value, interest(Year), total interest, invested capital
  return (
    <table id="result">
      <thead id="result thead">
      <tr>
        <th>Year</th>
        <th>Investment Value</th>
        <th>Interest (Year)</th>
        <th>Total Interest</th>
        <th>Invested Capital</th>
      </tr>
      </thead>
      <tbody id="result tbody">
      {/* You can map through your data here to create the rows */}
      {/* Example: 
      data.map((item) => (
        <tr key={item.year}>
        <td>{item.year}</td>
        <td>{item.investmentValue}</td>
        <td>{item.interestYear}</td>
        <td>{item.totalInterest}</td>
        <td>{item.investedCapital}</td>
        </tr>
      ))
      */}
      </tbody>
    </table>
    );
 }