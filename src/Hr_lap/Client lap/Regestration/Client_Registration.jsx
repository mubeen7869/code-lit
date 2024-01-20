import React, { useState } from "react";
import "./Client_Registration.css";

export default function Vender_registration() {
  const [state, setstate] = useState({
    vender_register: false,
  });

  return (
    <div className="Register-form">
      <h2>Vendor Registration</h2>

      {/* Section: Registration */}
      <div className="form-section">
          <table>
          <tbody>
          <tr>
          <td><strong>VENDOR_ID</strong></td>
          </tr>
          <tr>
          <td><input type="text" name="vendorId" id="vendorId" /></td>
          </tr>
           
                        <tr>
          <td><strong>VENDOR_NAME</strong></td>
          </tr>
          <tr>
          <td><input type="text" name="vendorName" id="vendorName" /></td>
          </tr>
           
                        <tr>
          <td><strong>RATE_CARD</strong></td>
          </tr>
          <tr>
          <td><input type="text" name="rateCard" id="rateCard" /></td>
          </tr>
          <tr>
<td><strong>LOCATION</strong></td>
</tr>
<tr>
<td><input type="text" name="location" id="location" /></td>
</tr>
 
<tr>
<td><strong>JOB_TYPE</strong></td>
</tr>
<tr>
<td><input type="text" name="jobType" id="jobType" /></td>
</tr>
 
<tr>
<td><strong>PAYROLL</strong></td>
</tr>
<tr>
<td><input type="text" name="payRoll" id="payRoll" /></td>
</tr>
 
<tr>
<td><strong>CANDIDATE_NAME</strong></td>
</tr>
<tr>
<td><input type="text" name="candidateName" id="candidateName" /></td>
</tr>
 
<tr>
<td><strong>TECHNOLOGY</strong></td>
</tr>
<tr>
<td><input type="text" name="technology" id="technology" /></td>
</tr>
 
<tr>
<td><strong>YEARS</strong></td>
</tr>
<tr>
<td><input type="text" name="YEARS" id="YEARS" /></td>
</tr>
 
<tr>
<td><strong>FIRST_REVIEWED</strong></td>
</tr>
<tr>
<td><input type="text" name="FIRST_REVIEWED" id="FIRST_REVIEWED" /></td>
</tr>
 
<tr>
<td><strong>SECONDREVIEWED</strong></td>
</tr>
<tr>
<td><input type="text" name="SECONDREVIEWED" id="SECONDREVIEWED" /></td>
</tr>
 
<tr>
<td><strong>CV_FORMAT</strong></td>
</tr>
<tr>
<td><input type="text" name="CV_FORMAT" id="CV_FORMAT" /></td>
</tr>    
 </tbody>
          </table>
     
      </div>
    </div>
  );
}
