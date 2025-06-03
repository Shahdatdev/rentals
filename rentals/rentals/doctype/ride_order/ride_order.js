// Copyright (c) 2025, Shahadat Hossan and contributors
// For license information, please see license.txt

frappe.ui.form.on("Ride Order", {
    onload(frm) {
        console.log("running load..."); 
    },
    setup(frm) {
        console.log("setup...");
    },
	refresh(frm) {
        console.log("on refresh..")

        if (frm.doc.status === "New") {
            frm.add_custom_button("Accept", () => {
                // status => Accepted
                frm.set_value("status", "Accepted");
                // save the form
                frm.save();
            }, "Actions")

            frm.add_custom_button("Reject", () => {
                // status => Accepted
                frm.set_value("status", "Rejected");
                // save the form
                frm.save();
            }, "Actions")
        }
	},
    status(frm) {
        console.log("status changed");
    }
});





// frappe.ui.form.on("Ride Order", {
//     onload(frm) {
//         console.log("running load..."); 
//     },
//     setup(frm) {
//         console.log("setup...");
//     },
//     refresh(frm) {
//         console.log("on refresh...");

//         if (frm.doc.status === "New") {
//             // Check if buttons already exist to avoid duplicates
//             if (!frm.custom_buttons) {
//                 frm.custom_buttons = {};
//             }

//             if (!frm.custom_buttons.accept) {
//                 frm.custom_buttons.accept = frm.add_custom_button("Accept", () => {
//                     // Set status to Accepted
//                     frm.set_value("status", "Accepted");
//                     // Save the form
//                     frm.save().then(() => {
//                         frappe.show_alert({
//                             message: __("Ride Order accepted!"),
//                             indicator: "green"
//                         });
//                         frm.refresh_fields(); // Refresh fields to reflect changes
//                     }).catch((error) => {
//                         frappe.show_alert({
//                             message: __("Error accepting Ride Order: ") + error.message,
//                             indicator: "red"
//                         });
//                     });
//                 });
//             }

//             if (!frm.custom_buttons.reject) {
//                 frm.custom_buttons.reject = frm.add_custom_button("Reject", () => {
//                     // Set status to Rejected
//                     frm.set_value("status", "Rejected");
//                     // Save the form
//                     frm.save().then(() => {
//                         frappe.show_alert({
//                             message: __("Ride Order rejected!"),
//                             indicator: "red"
//                         });
//                         frm.refresh_fields(); // Refresh fields to reflect changes
//                     }).catch((error) => {
//                         frappe.show_alert({
//                             message: __("Error rejecting Ride Order: ") + error.message,
//                             indicator: "red"
//                         });
//                     });
//                 });
//             }
//         }
//     },
//     status(frm) {
//         console.log("status changed");
//     }
// });

