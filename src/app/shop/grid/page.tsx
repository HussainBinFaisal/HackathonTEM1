import Companies from '@/components/Companies'
import MainHeader from '@/components/MainHeader'
import ProductCard from '@/components/lal/ProductCard'
import StoreDatahandler from '@/components/lal/StoreDatahandler'
import React from 'react'


const ShopList = () => {
    return (
        <>
            <MainHeader title='Shop List' prev='Home . Pages . Shop . ' current='Shop List' />

            <StoreDatahandler />
            <div className="px-40 w-full py-10">
                <ProductCard designType='BAR' showDots={true} />
                <ProductCard designType='BAR' showDots={true} />
                <ProductCard designType='BAR' showDots={true} />
                <ProductCard designType='BAR' showDots={true} />
                <ProductCard designType='BAR' showDots={true} />
                <ProductCard designType='BAR' showDots={true} />
                <ProductCard designType='BAR' showDots={true} />
                <ProductCard designType='BAR' showDots={true} />

            </div>
            <Companies />
        </>
    )
}

export default ShopList
