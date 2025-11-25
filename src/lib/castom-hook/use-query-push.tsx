import { useNavigate, useLocation } from 'react-router';

export const useQueryPush = () => {
    const navigate = useNavigate();
    const { pathname, search } = useLocation();
    console.log(search.slice(1)
        .split('&')
        .map(item => item.split('='))
        .reduce((prev, curr) => { return { ...prev, ...curr } }, {})
    );


    const push = (
        query: { [key: string]: string }[]
    ) => {
        let q = {}
        query.forEach(element => {
            q = { ...q, ...element }
        });

        const params = new URLSearchParams(q);
        navigate({ pathname: pathname, search: params.toString() });
    }

    return push
}