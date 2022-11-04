import './../App.css';
const Main = () => {
  return (
    <div>
      <div className='header'>
        <div className='header_1'>
          <img className='logo header_1_item' src='./logo.svg' />
          <div className='header_1_line header_1_item'></div>
          <a className='logoname header_1_item'>ENGINEER</a>
        </div>

        <div className='header_2'>
          <a href='/Main' className='header_2_item1'>Главная</a>
          <a href='/Projets' className='header_2_item'>Проекты</a>
          <a href='/Platform' className='header_2_item'>О Платформе</a>
        </div>
      </div>

      <div className='content'>
        <a>ИНЖЕНЕРИЯ</a>
        <p>Платформа выделяющая аспекты <br />
        проектирования и реализацию схем на <br />
        практике с помощью конструктора <br /> 
        Arduino
          </p>
      </div>
    </div>
  );
}
export default Main