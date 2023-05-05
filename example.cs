public class Person
{
    // Eigenschaften der Klasse
    public string Name { get; set; }
    public int Alter { get; set; }

    // Konstruktor der Klasse
    public Person(string name, int alter)
    {
        Name = name;
        Alter = alter;
    }

    // Methode der Klasse
    public void SagHallo()
    {
        Console.WriteLine($"Hallo, ich heiße {Name} und bin {Alter} Jahre alt!");
    }

    public string TestHello() {
        return "Hello World!";
    }

    public Person ModifyPersonName() {
        console.WriteLine(this.name);
        this.name = "ModifiedName";
        console.WriteLine(this.name);
        return this;
    }

    public Person ModifyPersonAge() {
        console.WriteLine(this.age);
        this.name = 30;
        console.WriteLine(this.age);
        return this;
    }
}


var myPerson = new Person("Max", 27);

/* 
myPerson = myPerson.ModifiedName();
myPerson = myPerson.ModifyPersonAge(); 
*/
// Method-Chaining || Chaining || JS => Then-able functions
myPerson.ModifiedName().ModifyPersonAge();