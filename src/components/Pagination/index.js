import Pagination from 'react-bootstrap/Pagination';

const PaginationComponent = ({ page , setPage , total }) => {

    let active = page;
    let items = [];
    for (let number = 1; number <= total ; number++) {
        items.push(
            <Pagination.Item key={number} active={number === active} onClick={() => setPage(number) } 
            color='red' >
                {number}
            </Pagination.Item>,
        );
    }


    return (
            <Pagination>{items}</Pagination>
    )
}

export default PaginationComponent