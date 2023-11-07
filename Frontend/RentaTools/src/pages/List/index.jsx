import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { Searchbar } from "../../components/Searchbar";
import { getInformationFromEndpoints } from "../../api/requestHandlers";
import { ENDPOINTS_CODE } from "../../api/constants";
import { ContextGlobal } from "../../api/global.context.helper";
import Pagination from "@mui/material/Pagination";
import ProductList  from "../../components/ProductList";
import "./styles.css"

const List = () => {
    const { categoryId } = useParams();
    const { productsList, productsAll } = useContext(ContextGlobal);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);
    const itemsPerPage = 10;


    useEffect(() => {
            getInformationFromEndpoints(ENDPOINTS_CODE.PRODUCTS_ALL,"", categoryId, page, itemsPerPage).then((response) => {
                productsAll(response);
                setTotalPages(response.totalPages);
            });
    }, [productsAll, categoryId, page, itemsPerPage]);

    const handleChange = (event, value) => {
        setPage(value);
    };

    

    
    return (
        <div className="body home-container  page-container listView">
            <Searchbar />
            <ProductList products={productsList}/>
            <Pagination 
                count={totalPages} 
                variant="outlined" 
                shape="rounded" 
                page={page} 
                onChange={handleChange} />
        </div>
    );
};

export default List;