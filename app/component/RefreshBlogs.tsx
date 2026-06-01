"use client"
import {useEffect} from 'react'
import { useRouter } from 'next/navigation'
const Refresh = () => {
    const router = useRouter()
    useEffect(()=> {
        const interval = setInterval(()=> {
          router.refresh()
        }, 3000)
        clearInterval(interval)
    }, [router])
  return null;
}

export default Refresh;