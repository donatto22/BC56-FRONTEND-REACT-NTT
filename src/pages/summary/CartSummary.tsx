import { useState } from 'react'
import TableSummary from './views/table/TableSummary'
import Footer from '@components/footer/Footer'
import Header from '@components/header/Header'

import listView from '@icons/list-outline.svg'
import gridView from '@icons/grid-outline.svg'

import './cartSummary.css'
import GridSummary from './views/grid/GridSummary'
import BuyForm from '@components/buyForm/BuyForm'

const CartSummary = () => {
    const [view, setView] = useState<'list' | 'grid'>('list')

    return (
        <>
            <Header />

            <div id="cartViewOptions">
                <button className='viewOption' onClick={ () => setView('list') }>
                    <img width={20} src={ listView } alt="List outline icon" />
                </button>

                <button className='viewOption' onClick={ () => setView('grid') }>
                    <img width={20} src={ gridView } alt="Grid outline icon" />
                </button>
            </div>

            {
                view == 'list' ? <TableSummary /> : <GridSummary />
            }

            <BuyForm />

            <Footer />
        </>
    )
}

export default CartSummary
