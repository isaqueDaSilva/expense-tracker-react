import { useState } from "react";
import { Card } from "./components/Card";
import { Button } from "./components/Button";
import { Input } from "./components/Input";
import { Select } from "./components/Select";
import { Plus, Edit, Trash, LogOut } from "lucide-react";
import { Signin } from "./pages/Signin";

function App() {
  const [page, setPage] = useState("signin");
  const [showCategoryDialog, setShowCategoryDialog] = useState(false);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      {page === "signin" && (
        <Signin
          onSigninSuccessed={ () => { setPage("home") } }
          onClickSignupButton={ () => { setPage("signup") } }
        ></Signin>
      )}

      {page === "signup" && (
        <Card>
          <h1 className="text-2xl font-bold text-center">Sign Up</h1>
          <Input placeholder="Username" />
          <Input placeholder="Email" />
          <Input placeholder="Password" type="password" />
          <Button className="w-full">Create Account</Button>
          <p className="text-center text-sm text-gray-600">
            Already have an account?{" "}
            <button onClick={() => setPage("signin")} className="text-blue-500">
              Sign in
            </button>
          </p>
        </Card>
      )}

      {page === "home" && (
        <div className="w-full max-w-2xl space-y-4">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-semibold">Welcome, User!</h2>
            <Button variant="outline" size="sm">
              <LogOut className="w-4 h-4 inline-block mr-1" />
              Logout
            </Button>
          </div>
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
      )}

      {(page === "new-expense" || page === "edit-expense") && (
        <Card>
          <h1 className="text-2xl font-bold text-center">
            {page === "new-expense" ? "New Expense" : "Edit Expense"}
          </h1>
          <Input placeholder="Title" />
          <Input placeholder="Description" />
          <Input placeholder="Amount" type="number" />
          <Input type="date" />
          <div className="space-y-2">
            <Select
              placeholder="Select Category"
              options={["Food", "Transport"]}
            />
            <div className="flex gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setShowCategoryDialog(true)}
              >
                Edit Category
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => setShowCategoryDialog(true)}
              >
                New Category
              </Button>
            </div>
          </div>
          <div className="flex justify-between">
            <Button variant="outline" onClick={() => setPage("home")}>
              Cancel
            </Button>
            <Button>OK</Button>
          </div>
        </Card>
      )}

      {showCategoryDialog && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <div className="bg-white rounded-2xl p-6 w-80 space-y-4">
            <h2 className="text-lg font-semibold text-center">
              New / Edit Category
            </h2>
            <Input placeholder="Category Name" />
            <div className="flex justify-end gap-2">
              <Button
                variant="outline"
                onClick={() => setShowCategoryDialog(false)}
              >
                Cancel
              </Button>
              <Button>Create</Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
