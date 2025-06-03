import frappe

@frappe.whitelist(allow_guest=True)
def get_emoji():
    return "money"

def throw_emoji(doc, event):
    frappe.throw("ttttttttttttt")

def send_apyment_reminders():
    pass

def get_query_conditions_for_vehicle(user):
    return "name = 1"