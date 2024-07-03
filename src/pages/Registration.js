import React from 'react';

const Registration = () => {
  return (
    <div className="max-w-4xl mx-auto p-4 sm:p-6 lg:p-8 text-left">
      <h2 className="text-2xl font-bold mb-4">Register</h2>
      <p className="mt-4">
        You can register by clicking here:
        <a href="https://docs.google.com/forms/d/e/1FAIpQLScMKNvrrbjDeAX0HFPbHGjoAEWvgqMLgufB-zkDqPH2-_IcQQ/closedform" className="text-blue-500 hover:underline ml-2">Registration Form</a>
      </p>
      <h3 className="text-xl font-bold mt-8">Payment Information</h3>
      <p className="mt-4">
        Bank: HSBC<br />
        Name: BUAP VIEP ACT-ACADEM.<br />
        Account: 4070369335<br />
        Interbank Clabe: 021650040703693352<br />
        Reference: Inscripción DILA 2024<br />
        <br />
        Important: If making a digital transfer, in the Reference field, include: Inscripción DILA 2024 and the full name of the student. If paying at the bank, the receipt must have the full name of the student written in blue ink.<br />
        <br />
        Once the deposit or transfer is made, it is necessary to send the receipt by email with the subject: "Inscripción DILA 2024" to the addresses we will provide, with the full name of the person to be registered. This name will be used for the Diploma once approved.<br />
        If an invoice is required, it must be indicated when sending the payment receipt.<br />
        <br />
        INVESTMENT: $5000.00 MXN (five thousand Mexican pesos)<br />
        Includes registration for the diploma, materials for activities, daily breakfast, and diploma (upon meeting the requirements for its issuance).
      </p>
    </div>
  );
}

export default Registration;
