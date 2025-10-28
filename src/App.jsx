import { useState } from "react";
import { Card } from "./components/Card";
import { Button } from "./components/Button";
import { Input } from "./components/Input";
import { Select } from "./components/Select";
import { Plus, Edit, Trash, LogOut } from "lucide-react";
import { Signin } from "./pages/Signin";
import { Signup } from "./pages/Signup";
import { Home } from "./pages/Home";
import "./index.css";

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
        <Signup
          onSignupSuccessed={ () => { setPage("home") } }
          onClickSigninButton={ () => { setPage("signin") } }
        ></Signup>
      )}

      {page === "home" && (
        <Home
          onSignoutSuccessed={ () => { setPage("signin") } }
        ></Home>
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
