import React from 'react'


function Pagination({ totalp, totalc, setCurrentPage, currentPage }) {


  let pages = []


  for (let i = 1; i <= Math.ceil(totalp / totalc); i++) {
    pages.push(i)

  }
  const handlePre = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1)
    }
  }
  const handlePageNext = () => {
    if (currentPage < pages.length) {
      setCurrentPage(currentPage + 1)
    }
  }


  return (
    <>

      <div className=' mt-5 d-flex align-items-center justify-content-center'>

        <button onClick={handlePre} disabled={currentPage==1} className='btn me-2'><i className="fa-solid fa-arrow-left"></i></button>

        {
          pages?.map(page => (
            <button onClick={() => setCurrentPage(page)} className='btn me-2'>{page}</button>
          ))
        }
        <button onClick={handlePageNext} disabled={currentPage==pages.length} className='btn'><i className="fa-solid fa-arrow-right"></i></button>

      </div>

    </>
  )
}

export default Pagination