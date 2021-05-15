import { useRouter } from 'next/router'

const FoodName = () => {

    const router = useRouter()

    console.log(router.query)
    // console.log(router.query.name[0]);

    return (
        <div>
            <h1>name</h1>
        </div>
    )
}

export default FoodName

// url http://localhost:3000/food/3/somtum