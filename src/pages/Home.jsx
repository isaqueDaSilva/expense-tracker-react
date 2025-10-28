import { Button } from "../components/Button"
import { Input } from "../components/Input"
import { Card } from "../components/Card"
import { Select } from "../components/Select"
import { Plus, Edit, Trash, LogOut } from "lucide-react"
import { ProfileSection } from "../components/ProfileSection"
import { useState } from "react"
import "../index.css";

export function Home({onSignoutSuccessed}) {
    const [isLoading, setIsLoading] = useState(false)

    return (
        <div className="w-full max-w-2xl space-y-4">
          <ProfileSection 
            setState={ (isLoading) => setIsLoading(isLoading) }
            onSignoutSuccessed={onSignoutSuccessed}
          ></ProfileSection>
          <div className="flex gap-2">
            <Input placeholder="Filter by Date" type="date" />
            <Select
              placeholder="Filter by Category"
              options={["Food", "Transport"]}
            />
            <Button onClick={() => setPage("new-expense")}>
              <Plus className="w-4 h-4 inline-block mr-1" />
              New
            </Button>
          </div>
          <Card>
            {[1, 2, 3].map((expense) => (
              <div
                key={expense}
                className="flex justify-between items-center border-b pb-2"
              >
                <div>
                  <p className="font-medium">Expense {expense}</p>
                  <p className="text-sm text-gray-500">$100 - Food</p>
                </div>
                <div className="flex gap-2">
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => setPage("edit-expense")}
                  >
                    <Edit className="w-4 h-4" />
                  </Button>
                  <Button size="sm" variant="outline">
                    <Trash className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            ))}
          </Card>
        </div>
    )
}