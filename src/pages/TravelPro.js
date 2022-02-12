import plan from "../assets/plan01.png";
import ex01 from "../assets/Ex-1.png";
import ex02 from "../assets/Ex-2.png";
import Op01 from "../assets/Op-1.png"
import Op02 from "../assets/Op-2.png"
import Op03 from "../assets/Op-3.png"
import Op04 from "../assets/Op-4.png"
import Op05 from "../assets/Op-5.png"
import Op06 from "../assets/Op-6.png"

const TravelPro = () => {
  return (
    <>
      <article style={{ width: "800px", marginLeft: "400px", paddingTop: "50px" }}>
        <h3>Introduction</h3>
        <p>
          TravelPro is a bill-generating application developed using Java
          programming language for tourism industry. It computes the bill after
          accepting the required input data from the user.
        </p>
        <p>
          There are two main categories of tours from which the users can select
          - Group Tours &amp; Customized Tours. Between these categories, there
          are different destinations which the customer can choose. According to
          the tour package selected by the customer, the tour price is
          calculated and the bill is printed.
        </p>
        <p>
          We are also providing great offers for our customers. The discount is
          provided according to the month in which the tour is being booked.
        </p>

        <div className="mt-5">
            <h3>Flow of the Project</h3>
            <p>
            The process of accepting the input of the choice of tour and
            displaying the chosen tour details will be on the command line. Once
            the customer finalizes the tour, they are redirected to an AWT form
            where they will enter their personal details and then the final bill
            will be printed on another AWT frame. The redirection is done to
            reduce the clutter in accepting the input of various fields of details
            and thus, providing a better user experience.
            </p>
        </div>

        <div className="mt-5">
            <h3>The Plan</h3>
            <p>
            To implement this project, we have divided it into 7 classes based on
            different functionalities to reduce the complexity.
            </p>
            <ul>
            <li>Accepting the choice of Tour </li>
            <li>Displaying details of the Tour chosen by the customer</li>
            <li>Accepting the required details of the customer</li>
            <li>Printing the final bill</li>
            </ul>
            <img src={plan} alt="plan" className="ms-5 ps-5"/>
            <ol>
            <li>
                Accepting the choice of Tour- This functionality is divided into two
                classes, ChooseCategories and TourOptions. ChooseCategories class
                contains the switch case for accepting the input of the entered
                choice of tour. Whereas the TourOptions class displays the available
                tour options. This is implemented to avoid confusion due to nested
                switch cases and thus, improving readability.
            </li>
            <li>
                Displaying details of the Tour chosen- This functionality is also
                divided into two classes, TourInfo and Display. TourInfo class is
                storing the information of the group tours. For example- the tour
                name, tour itinerary, start &amp; end dates of the tour and the cost
                per person. We have used two-dimensional array of objects to store
                the data. Display class displays the details of the tour selected by
                the customer.
            </li>
            <li>
                Accepting the required details of the customer- To accept the
                personal details of the customer, we use an AWT form.
            </li>
            <li>
                Printing the final bill- The Bill class prints the total bill
                computed as per the tour chosen by the customer.
            </li>
            </ol>
        </div>

        <div className="mt-5">
            <h3>Java Concepts used</h3>
            <p>The concepts used in the mini-project are -</p>
            <ul>
            <li>Inheritance</li>
            <li>Exception Handling</li>
            <li>Java AWT</li>
            <li>Two-Dimensional Array of Objects</li>
            </ul>
            <p>
            <strong>Inheritance</strong> - Inheritance is a mechanism in which one
            object acquires all the properties and behaviors of a parent object.
            This concept is used in the mini-project to connect two different
            classes with the help of the ‘extends’ keyword. For example- Display
            class is extended to the TourInfo class &amp; ChooseCategories class
            is extended to the TourOptions class.
            </p>

            <p>
            <strong>Exception Handling</strong> - Exception Handling is a
            mechanism to handle runtime errors so that the normal flow of the
            application can be maintained. This concept is applied in the
            mini-project to handle run time errors that might occur while
            accepting the input for certain details. For example- To obtain the
            input of the total number of people (in InputGTInfo method of
            InputDetails class) there is a possibility that the user can enter
            non-numerical data. So to avoid this, NumberFormatException is used to
            handle the error.
            </p>
            <img src={ex01} alt="ex01" className="my-2"/>
            <p>
            To obtain the input of destination name (in InputCTInfo method of
            InputDetails class) there is a possibility that the user can enter
            non-alphabetical data. So to avoid this, the user-defined exception is
            used which will check if the data entered is alphabetical or in any
            other format. If it is non-alphabetical, the required message will be
            displayed.
            </p>
            <img src={ex02} className="my-2"/>
            <p>
            <strong>Java AWT</strong> - Java AWT is an Application Programming
            Interface to develop Graphical User Interface or Windows-based
            applications in Java. This concept is used in the mini-project to take
            the input of the personal details of the user. We have used AWT Form
            to reduce the clutter in accepting the input of various fields of
            details and thus, providing a better user experience.
            </p>

            <p>
            <strong>Two-Dimensional Array of Objects</strong> - An array is a
            collection of data of the same data type. So, an array that stores
            objects as its elements is known as an array of objects. The reference
            of the objects is stored in the array. This concept is applied in the
            mini-project to store the data of tours. For example- the tour
            itinerary, cost per person, start &amp; end dates of the respective
            tours are stored in the respective block of the two-dimensional array.
            </p>
        </div>
        
        <div className="mt-5">
            <h3>Output</h3>
            <img src={Op01} className="mt-3"/><p className="caption mt-1">Welcome message &amp; the Tour options are displayed</p>
            <img src={Op02} className="output"/><p className="caption mt-1">Tour Itinerary of the chosen Tour is displayed and also the cost of per person </p>
            <img src={Op03} className="output"/><p className="caption mt-1">Inclusions &amp; Exclusions of the tour cost is displayed and confirmation is asked if the customer wants to confirm the chosen Tour</p>
            <img src={Op04} className="output"/><p className="caption mt-1">Once the customer has confirmed the Tour, personal details form is displayed</p>
            <img src={Op05} className="output"/><p className="caption mt-1">After filling the form, Final Bill is printed</p>
            <img src={Op06} className="output"/><p className="caption mt-1">After the bill is printed, a Thank You message is displayed</p>
        </div>
      </article>
    </>
  );
};

export default TravelPro;
