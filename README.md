<Row className='mt-5'>
          <Col xl={3} lg={4} md={6} sm={12} className='mb-2 me-2' >


            <Card style={{ width: '18rem' }}>
              <Card.Img height={'250px'} variant="top" src="https://assets.ajio.com/medias/sys_master/root/20240930/IFsF/66fabd58260f9c41e844d374/-473Wx593H-700518046-grey-MODEL.jpg" />
                <Card.Body>
                  <Card.Title className='text-center fw-bold'>H&M Shirt</Card.Title>
                    <div className='text-center'>
                      <Link className='text-decoration-none text-success' style={{fontWeight:'500'}} to={'/view/1'}>View More</Link>
                    </div>
                </Card.Body>
            </Card>


          </Col>
        </Row>



        --------------------------------------------

            <>
      <Header />

      <div className="container" style={{ marginTop: '150px' }}>
        <h3 className='text-danger'>Cart Summary</h3>

        <div className="row mt-5 p-5">

          <div className="col-lg-8">

            <table className='table'>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Title</th>
                  <th>Image</th>
                  <th>Quantity</th>
                  <th>Price</th>
                  <th>...</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>1</td>
                  <td>H&M Shirt</td>
                  <td><img src="https://assets.ajio.com/medias/sys_master/root/20240930/IFsF/66fabd58260f9c41e844d374/-473Wx593H-700518046-grey-MODEL.jpg" alt="" width={'50px'} height={'50px'} /></td>
                  <td>
                    <button style={{ height: '30px', width: '30px' }} className='btn fw-bold p-1'>-</button>
                    <input className='border border-white me-1 ms-4' type="text" readOnly style={{ width: '30px' }} value={1} />
                    <button style={{ height: '30px', width: '30px' }} className='btn fw-bold p-1'>+</button>
                  </td>
                  <td>$499</td>
                  <td><i style={{ color: 'red' }} class="fa-solid fa-trash"></i></td>
                </tr>


              </tbody>
            </table>

            <div className='div d-flex justify-content-end'>
              <button style={{ backgroundColor: '#292830', color: 'white' }} className='btn fw-bold me-3 p-2'>Empty Cart</button>
              <button style={{ backgroundColor: '#31511E', color: 'white' }} className='btn fw-bold p-2'>Shop more</button>
            </div>


          </div>

          <div className="col-lg-4 ">

            <div className="shadow p-3">

              <h5 >Total Items : <span className='text-danger'> 1</span> </h5>
              <h4>Total Amount : <span className='text-danger'>$499</span></h4>
              <button className='btn btn-warning fw-bold w-100 mt-3'>Checkout</button>
            </div>

          </div>
        </div>

      </div>
    </>