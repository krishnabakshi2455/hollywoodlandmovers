import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar"

export function RecentSales() {
    return (
        <div className="space-y-8">
            <div className="flex items-center">
                <Avatar className="h-9 w-9">
                    <AvatarImage src="/avatars/01.png" alt="Avatar" />
                    <AvatarFallback>D1</AvatarFallback>
                </Avatar>
                <div className="ml-4 space-y-1">
                    <p className="text-sm font-medium leading-none">Driver1</p>
                    <p className="text-sm text-muted-foreground">
                        Driver1@gmail.com
                    </p>
                </div>
                <div className="ml-auto font-medium">+$1,999.00</div>
            </div>
            <div className="flex items-center">
                <Avatar className="flex h-9 w-9 items-center justify-center space-y-0 border">
                    <AvatarImage src="/avatars/02.png" alt="Avatar" />
                    <AvatarFallback>D2</AvatarFallback>
                </Avatar>
                <div className="ml-4 space-y-1">
                    <p className="text-sm font-medium leading-none">Driver2</p>
                    <p className="text-sm text-muted-foreground">
                        Driver2@gmail.com
                    </p>
                </div>
                <div className="ml-auto font-medium">+$39.00</div>
            </div>
            <div className="flex items-center">
                <Avatar className="h-9 w-9">
                    <AvatarImage src="/avatars/03.png" alt="Avatar" />
                    <AvatarFallback>D3</AvatarFallback>
                </Avatar>
                <div className="ml-4 space-y-1">
                    <p className="text-sm font-medium leading-none">Driver3</p>
                    <p className="text-sm text-muted-foreground">
                        Driver3@gmail.com
                    </p>
                </div>
                <div className="ml-auto font-medium">+$299.00</div>
            </div>
            <div className="flex items-center">
                <Avatar className="h-9 w-9">
                    <AvatarImage src="/avatars/04.png" alt="Avatar" />
                    <AvatarFallback>D4</AvatarFallback>
                </Avatar>
                <div className="ml-4 space-y-1">
                    <p className="text-sm font-medium leading-none">Driver4</p>
                    <p className="text-sm text-muted-foreground">
                        Driver4@gmail.com
                    </p>
                </div>
                <div className="ml-auto font-medium">+$99.00</div>
            </div>
            <div className="flex items-center">
                <Avatar className="h-9 w-9">
                    <AvatarImage src="/avatars/05.png" alt="Avatar" />
                    <AvatarFallback>D5</AvatarFallback>
                </Avatar>
                <div className="ml-4 space-y-1">
                    <p className="text-sm font-medium leading-none">Driver5</p>
                    <p className="text-sm text-muted-foreground">
                        Driver5@gmail.com
                    </p>
                </div>
                <div className="ml-auto font-medium">+$39.00</div>
            </div>
        </div>
    )
}