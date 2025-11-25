import { useNavigate, useLocation } from 'react-router';

export const useQueryPush = () => {
    const navigate = useNavigate();
    const { pathname, search } = useLocation();
    let prevq = {}
    search
        .slice(1)
        .split('&')
        .map(item => item.split('='))
        .forEach(item => {
            prevq = { ...prevq, [item[0]]: item[1] }
        })


    const push = (
        query: { [key: string]: string }[]
    ) => {
        let q = {}
        query.forEach(element => {
            q = { ...q, ...element }
        });

        const params = new URLSearchParams({ ...prevq, ...q });
        navigate({ pathname: pathname, search: params.toString() });
    }

    return push
}