import React from "react"
import Link from "next/link"
import { unstable_noStore as noStore } from "next/cache"

import { Button } from "@/components/ui/button"
import { Container } from "@/components/ui/container"
import { Heading } from "@/components/ui/heading"
import { UsersIcon } from "@/components/pqoqubbw/icons/users"

import UsersTable from "@/components/admin/user/data-table"

import { fetchAllUsers } from "@/app/api/admin/user"

const Users = async () => {
  noStore()
  const users = await fetchAllUsers()
  return (
    <Container
      size={"2xl"}
      alignment={"none"}
      height={"full"}
      padding={"px-sm"}
      gap={"none"}
      flow={"none"}
      id="users"
      className="my-4"
    >
      {/* header */}
      <div className="mb-5 flex items-center justify-between">
        <Heading
          size={"5xl"}
          spacing={"normal"}
          lineHeight={"none"}
          margin={"none"}
        >
          Users
        </Heading>
        <Button>
          <Link href={"/admin/user/create-new"}>Add User</Link>
        </Button>
      </div>

      {/* main */}
      {users.length === 0 ? (
        <div className="my-40 flex flex-col items-center justify-center">
          <Heading size="sm" margin="md">
            No Users Found!
          </Heading>
          <UsersIcon size={80} />
        </div>
      ) : (
        <UsersTable users={users} />
      )}
    </Container>
  )
}

export default Users
