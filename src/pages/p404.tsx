import { Link, useNavigate } from "react-router-dom"

export const P404Page = () => {
    const navigate = useNavigate();
    return (
        <div className="h-full flex justify-center items-center fixed inset-0">
            <div>
                <p className="text-9xl -translate-x-2">Страница 404</p>
                <p className="mt-3">Как вы сюда попали?</p>
                <Link to={'..'}
                    onClick={(e) => {
                        e.preventDefault();
                        navigate(-1);
                    }}>
                    Назад</Link>
            </div>
        </div>
    )
}