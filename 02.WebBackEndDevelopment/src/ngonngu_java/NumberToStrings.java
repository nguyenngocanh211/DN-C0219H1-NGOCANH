package ngonngu_java;

import java.util.Scanner;

public class NumberToStrings {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.print("Enter a number:");
        int number = scanner.nextInt();

        if ((number >= 0) && (number < 10)) {
            switch (number) {
                case 0:
                    System.out.print(number + " zero");
                    break;
                case 1:
                    System.out.print(number + " one");
                    break;
                case 2:
                    System.out.print(number + " two");
                    break;
                case 3:
                    System.out.print(number + " three");
                    break;
                case 4:
                    System.out.print(number + " four");
                    break;
                case 5:
                    System.out.print(number + " five");
                    break;
                case 6:
                    System.out.print(number + " six");
                    break;
                case 7:
                    System.out.print(number + " seven");
                    break;
                case 8:
                    System.out.print(number + " eight");
                    break;
                case 9:
                    System.out.print(number + " nine");
                    break;


            }

        }
    }
}
