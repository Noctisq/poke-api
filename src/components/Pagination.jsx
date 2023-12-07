export default  function Pagination({ nextPage, previousPage, setCurrentPage }) {

    return (

        <div className='paginate-buttons'>
            {
                previousPage && 
                <button onClick={() => setCurrentPage(previousPage)} className='button-pag'>
                    Previous
                </button>
            }

            <button onClick={() => setCurrentPage(nextPage)} className='button-pag'>
                Next
            </button>
        </div>

    );
};
