public static void main(String[] args) 
{
    final String PASSWORD = "secret";
    Scanner sc = new Scanner(System.in);
    int attempts = 3;
    String password = "";
    while (attempts-- > 0 && !PASSWORD.equals(password)) //compares and then decrements
    {
        System.out.print("Enter your password: ");
        password = sc.nextLine();
        if (password.equals(PASSWORD)) 
            System.out.println("You entered the correct password");
        else 
            System.out.println("Your account is locked! You failed to enter the correct password # times: " + attempts);        
    }
}