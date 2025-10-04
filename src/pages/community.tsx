import { DftLayout } from "../component/general"
import { User } from "../component/shared"
import { Search } from "../component/ui"

export const CommunityPage = () => {
    return (
        <DftLayout size="w-[45%]">
            <div className="container pb-2">
                <div className="py-2 px-2">
                    <Search />
                </div>
                <User />
                <User />
                <User />
                <User />
                <User />
                <User />
                <User />
                <User />
                <User />
                <User />
            </div>
        </DftLayout>
    )
}