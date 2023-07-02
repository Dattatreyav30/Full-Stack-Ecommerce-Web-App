import './Home.css'
const Home = () => {
  return (
    <>
    <header className="home-header">
        <h1>Hi Welcome To Kitty Ecommerce</h1>
        <img  className='header-image' alt='catCeo' src='https://img.freepik.com/premium-photo/beautiful-cat-photo-beautiful-cat-cute-cat-cat-picpet_860112-7.jpg?w=2000'></img>
    </header>
    <h1 className='happy-heading'>Some Of Our Happy Customers</h1>
      <table className="cat-show-table">
        <thead>
          <tr>
            <th>Cat Name</th>
            <th>Breed</th>
            <th>Color</th>
            <th>Owner</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Fluffy</td>
            <td>Persian</td>
            <td>White</td>
            <td>John Smith</td>
          </tr>
          <tr>
            <td>Whiskers</td>
            <td>Maine Coon</td>
            <td>Tabby</td>
            <td>Jane Doe</td>
          </tr>
          <tr>
            <td>Shadow</td>
            <td>Siamese</td>
            <td>Seal Point</td>
            <td>Michael Johnson</td>
          </tr>
          <tr>
            <td>Simba</td>
            <td>Bengal</td>
            <td>Marbled</td>
            <td>Amy Thompson</td>
          </tr>
          <tr>
            <td>Luna</td>
            <td>Sphynx</td>
            <td>White</td>
            <td>David Wilson</td>
          </tr>
          <tr>
            <td>Oliver</td>
            <td>Scottish Fold</td>
            <td>Orange</td>
            <td>Sarah Anderson</td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default Home;
