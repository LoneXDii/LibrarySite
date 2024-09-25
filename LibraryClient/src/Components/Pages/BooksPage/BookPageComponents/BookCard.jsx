export default function BookCard({title, description, author, quantity, image}){
    return(
    <>
        <div className="col-md-3 p-2">
            <div className="card h-100">
                <div className="image-container" style={{ width: '100%', height: '200px' }}>
                    <img 
                        src={image} 
                        className="card-img-top mt-2"
                        style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                        alt="Book Cover"
                    />
                </div>
                <div className="card-body d-flex flex-column">
                    <h4 className="card-title flex-grow-1">{title}</h4>
                    <h5 className="card-text mb2 flex-grow-1">{author}</h5>
                    <p className="card-text mb2 flex-grow-1">{description}</p>
                    <h5 className="card-text flex-grow-1">{quantity} books left</h5>
                </div>
                <div className="card-footer text-center">
                    <a className="btn btn-outline-primary">
                        Take book
                    </a>
                </div>
            </div>
        </div>
    </>
  )
}