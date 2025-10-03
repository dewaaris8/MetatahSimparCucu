const generateRows = () => {
  const rows = [];
  for (let i = 1; i <= 3; i++) {
    rows.push(
      <div className="row" key={i}>
        <div className="card card-left">
          <img src="{`/img-$(2 * i - 1).jpg`}" alt="" />
        </div>
        <div className="card card-right">
          <img src="{`/img-$(2 * i).jpg`}" alt="" />
        </div>
      </div>
    );
  }
  return rows;
};

//   <div className="hero">
//               <div className="img"></div>
//             </div>
//             <div className="main">
//               <div className="main-content">
//                 <div className="copy">
//                   <div className="line">
//                     <p>
//                       Lorem ipsum dolor sit amet consectetur adipisicing elit.
//                       Doloribus, excepturi.
//                     </p>
//                   </div>
//                   <div className="line">
//                     <p>
//                       Lorem ipsum dolor sit amet consectetur adipisicing elit.
//                       Doloribus, excepturi.
//                     </p>
//                   </div>
//                   <div className="line">
//                     <p>
//                       Lorem ipsum dolor sit amet consectetur adipisicing elit.
//                       Doloribus, excepturi.
//                     </p>
//                   </div>
//                 </div>
//                 <div className="btn">
//                   <button>Get Pro</button>
//                 </div>
//               </div>
//             </div>
//             <div className="footer"></div>
