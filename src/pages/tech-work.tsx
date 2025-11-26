export const TechWork = () => {
    document.title = "Тех. перерыв"

    return (
        <div className="h-full flex justify-center items-center fixed inset-0">
            <div>
                <p className="text-9xl -translate-x-2">Технический перерыв!</p>
                <img src="/icon/no-find-data.svg" className="icon-4xl" />
                <p className="mt-3">Сайт проходит тех обзор</p>
                <p className="mt-2 text-sm">А как часто вы играете в d&d?</p>
            </div>
        </div>
    )
}