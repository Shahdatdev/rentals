// Copyright (c) 2025, Shahadat Hossan and contributors
// For license information, please see license.txt

frappe.ui.form.on("Vehicle", {
	refresh(frm) {
        
	},
    get_summery(frm) {
        frm.get_field("summery").$wrapper.append("<h1>Here is your summery<h1/>")
    }
});
