import fetchJson from "./fetchJson"
import Web3 from 'web3'


export async function handleSignup(account: string) {
    try {
        const res = await fetchJson('/api/user', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ account }),
        })
        return res
    } catch (error) {
        console.log(error)
        // show notification
    }
}

export async function handleAuthenticate({
    account,
    signature,
}: {
    account: string
    signature: string
}) {
    try {
        const res = await fetchJson('/api/auth', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ account, signature }),
        })

        return res
    } catch (error) {
        console.error('An unexpected error happened:', error)
        // show notification
    }
}

