'use client'

import { useSearchParams, usePathname, useRouter } from 'next/navigation';

export default function Search() {
    const searchParams = useSearchParams()
    const pathName = usePathname()
    const { replace } = useRouter()
    function handleSearch(term: string) {
        const urlSearchParams = new URLSearchParams(searchParams)
        if (term) {
            urlSearchParams.set("query", term)
        } else {
            urlSearchParams.delete("query")
        }
        replace(`${pathName}?${urlSearchParams.toString()}`);
    }
    return (
        <div>
            <input
                className="text-black"
                placeholder=""
                onChange={(e) => handleSearch(e.target.value)}
                defaultValue={searchParams.get("query")?.toString()}
            />
        </div>
    )
}
