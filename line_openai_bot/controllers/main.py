from odoo import http
from odoo.http import request

class LineBotController(http.Controller):
    
    @http.route('/line/webhook', type='http', auth='public', csrf=False)
    def line_webhook(self, **kwargs):
        # 這裡是未來接收 LINE 訊息的地方
        return "OK"
