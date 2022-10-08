import React, { useEffect, useState, useRef } from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import PaginationComponent from '../../components/Pagination'
import PostCard from '../../components/PostCard/PostCard'
import Search from '../../components/Search'
import usePagination from '../../hooks/usePagination'
import useStrappi from '../../hooks/useStrappi'
import { Helmet } from 'react-helmet'




const Home = ({ search, category }) => {

    const iframe = useRef()

    const [page, setPage] = useState(1)

    const { data, loading, error } = useStrappi('posts?pagination[page]=' + page + '&pagination[pageSize]=3&filters[Title][$containsi]=' + search +
        '&filters[categories][name][$contains]=')


    if (loading) return <p>loading...</p>
    if (error) return <p>not can load information</p>





    return (
        <Container className='mt-5 col-lg-12'>
            <Helmet>
            <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>

            </Helmet>
            <Row>
                <Col lg='12' className='ps-0' >
                    {
                        data && data.data?.map((post) => (
                            <Col lg='12' className='mb-3'>
                                <PostCard
                                    title={post.attributes.Title}
                                    content={post.attributes.Description}
                                    id={post.id}
                                />
                            </Col>
                        ))
                    }
                </Col>

                <Col lg='12' className=' p-0 justify-content-center align-items-center text-center'>
                    <PaginationComponent page={page} setPage={setPage} total={data?.meta?.pagination?.total} />
                </Col>
            </Row>
        </Container>
    )
}

export default Home