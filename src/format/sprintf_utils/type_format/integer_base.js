import alignAndPad from '../align_and_pad';
import toString from '../../../utilities/string/coerce_to_string';
import Const from '../const';

/**
 * Formats an integer type according to specifiers.
 *
 * @ignore
 * @param  {string} replacement          The string to be formatted.
 * @param  {string} [signSpecifier]      The sign specifier to force a sign to be used on a number.
 * @param  {string} paddingCharacter     The padding character.
 * @param  {string} [alignmentSpecifier] The alignment specifier that says if the result should be left-justified or right-justified.
 * @param  {number} [width]              The width how many characters this conversion should result in.
 * @param  {number} [precision]          The precision.
 * @param  {string} typeSpecifier        The type specifier says what type the argument data should be treated as.
 * @return {string}                      Returns the formatted string.
 */

export default function(replacement, signSpecifier, paddingCharacter, alignmentSpecifier, width, precision, typeSpecifier) {
  var integer = parseInt(replacement);
  if (isNaN(integer)) {
    integer = 0;
  }
  integer = integer >>> 0;
  switch (typeSpecifier) {
    case Const.TYPE_INTEGER_ASCII_CHARACTER:
      integer = String.fromCharCode(integer);
      break;
    case Const.TYPE_INTEGER_BINARY:
      integer = integer.toString(Const.RADIX_BINARY);
      break;
    case Const.TYPE_INTEGER_OCTAL:
      integer = integer.toString(Const.RADIX_OCTAL);
      break;
    case Const.TYPE_INTEGER_HEXADECIMAL:
      integer = integer.toString(Const.RADIX_HEXADECIMAL);
      break;
    case Const.TYPE_INTEGER_HEXADECIMAL_UPPERCASE:
      integer = integer.toString(Const.RADIX_HEXADECIMAL).toUpperCase();
      break;
  }
  return alignAndPad(toString(integer), paddingCharacter, alignmentSpecifier, width);
}