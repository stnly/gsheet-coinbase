# gsheet-coinbase
Pull Bitcoin price from Coinbase to a Google Sheet

## How to use this script

1. Open the Google Sheet
2. Go to "Tools" > "Script Manager" > "New" > "Blank Project"
3. Replace function with code here
4. Change variables to the cell numbers where you want the price to show
5. Go to "File" > "Rename" > "Enter new project name"
6. Use a name like "coinbase"
7. Go to "Edit" > "Current project's triggers" > "Add a new trigger"
8. In "Events" make it "Time-driven" and select the hours/minutes for price to refresh
9. Give script authorization to modify the Google Sheet
10. Reload the script manager in the Sheet and you should see your "coinbase" script

