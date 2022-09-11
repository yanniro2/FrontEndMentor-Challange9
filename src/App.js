
import './index.css';
import bg_1 from "./images/bg-pattern-bottom.svg";
import bg_2 from "./images/bg-pattern-top.svg";
import bg_3 from "./images/bg-pattern-card.svg";
import bg_4 from "./images/image-victor.jpg";
function App()
{
  return (
    <div className="App bg-Dark-cyan w-screen h-screen flex items-center justify-center relative overflow-hidden">
      <img src={bg_2} alt="img" className='absolute top-0 left-0 w-full -translate-x-1/2 -translate-y-1/2 -z-1' />
      <img src={bg_1} alt="img" className='absolute bottom-0 right-0 translate-x-2/3 translate-y-2/3 w-full z-10' />
      <div className="content w-96  h-96 bg-[#fff] z-50 rounded-2xl shadow-2xl overflow-hidden Mobile:w-4/5 Mobile:h-2/3">
        <div className="top w-full h-1/4">
          <img src={bg_3} alt="img" className='w-full object-cover overflow-hidden' />
        </div>
        <div className="middle flex flex-col w-full items-center justify-center">
          <img src={bg_4} alt="profile" className='rounded-full object-cover border-spacing-2 border-[#fff] border-8' />

          <div className="text flex w-full items-center flex-col justify-center font-kumbh font-ms">
            <div className='flex gap-2'>  <p className='font-lg text-Very-dark-desaturated-blue'>Victor Crest</p>
              <span className='text-Dark-gray'>26</span></div>
            <small className='text-Dark-gray text-ms'>London</small>
          </div>
        </div>
        <div className="bottom border-t-[2px] w-full h-1/4 border-[#eee] mt-[2rem]">
          <ul className='w-full h-full flex items-center justify-around' >
            {/* 1 */}
            <li className='w-full flex flex-col text-center'><p className='font-lg font-kumbh      text-Very-dark-desaturated-blue'>80K</p>
              <span className='font-lg text-Dark-gray text-[14px] tracking-wider'>Followers</span></li>

            {/* 2 */}
            <li className='w-full flex flex-col text-center'><p className='font-lg font-kumbh      text-Very-dark-desaturated-blue'>803K</p>
              <span className='font-lg text-Dark-gray text-[14px] tracking-wider'>Likes</span></li>

            {/* 3 */}
            <li className='w-full flex flex-col text-center'><p className='font-lg font-kumbh      text-Very-dark-desaturated-blue'>1.4K</p>
              <span className='font-lg text-Dark-gray text-[14px] tracking-wider'> Photos</span></li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
