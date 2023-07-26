class CodeTagHandler(GPS.InlineTagHandler):

   def __init__(self):
      super(CodeTagHandler, self).__init__('code')

   def has_parameter(self):
      return True

   def to_markup(self, writer, parameter):
      writer.generate_inline()
      text = "<tt>" + parameter + "</tt>"
      writer.html(text)

class Generics(GPS.InlineTagHandler):

   def __init__(self):
      super(Generics, self).__init__('generics')

   def has_parameter(self):
      return False

   def to_markup(self, writer, parameter):
      writer.generate_inline()
      writer.html("<h3>Generic parameters</h3>")

GPS.register_tag_handler(Generics())
GPS.register_tag_handler(CodeTagHandler())
