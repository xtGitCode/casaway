import Link from "next/link"
import { Button } from "@/components/ui/button"
import { PiCastleTurretFill } from "react-icons/pi"

function Logo() {   
  return (
    <Button size='icon' asChild>
      <Link href="/">
        <PiCastleTurretFill className="h-6 w-6" />
      </Link>
    </Button>
  )
}

export default Logo
