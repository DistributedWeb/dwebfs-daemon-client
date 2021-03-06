/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

goog.exportSymbol('proto.Index', null, global);
goog.exportSymbol('proto.Mount', null, global);
goog.exportSymbol('proto.Stat', null, global);

/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.Index = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.Index, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.Index.displayName = 'proto.Index';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.Index.prototype.toObject = function(opt_includeInstance) {
  return proto.Index.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.Index} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Index.toObject = function(includeInstance, msg) {
  var f, obj = {
    type: jspb.Message.getField(msg, 1),
    content: msg.getContent_asB64()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.Index}
 */
proto.Index.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.Index;
  return proto.Index.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.Index} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.Index}
 */
proto.Index.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setType(value);
      break;
    case 2:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setContent(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.Index.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.Index.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.Index} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Index.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeString(
      1,
      f
    );
  }
  f = /** @type {!(string|Uint8Array)} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeBytes(
      2,
      f
    );
  }
};


/**
 * required string type = 1;
 * @return {string}
 */
proto.Index.prototype.getType = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.Index.prototype.setType = function(value) {
  jspb.Message.setField(this, 1, value);
};


proto.Index.prototype.clearType = function() {
  jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.Index.prototype.hasType = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional bytes content = 2;
 * @return {!(string|Uint8Array)}
 */
proto.Index.prototype.getContent = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * optional bytes content = 2;
 * This is a type-conversion wrapper around `getContent()`
 * @return {string}
 */
proto.Index.prototype.getContent_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getContent()));
};


/**
 * optional bytes content = 2;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getContent()`
 * @return {!Uint8Array}
 */
proto.Index.prototype.getContent_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getContent()));
};


/** @param {!(string|Uint8Array)} value */
proto.Index.prototype.setContent = function(value) {
  jspb.Message.setField(this, 2, value);
};


proto.Index.prototype.clearContent = function() {
  jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.Index.prototype.hasContent = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.Mount = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.Mount, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.Mount.displayName = 'proto.Mount';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.Mount.prototype.toObject = function(opt_includeInstance) {
  return proto.Mount.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.Mount} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Mount.toObject = function(includeInstance, msg) {
  var f, obj = {
    key: msg.getKey_asB64(),
    version: jspb.Message.getField(msg, 2),
    hash: msg.getHash_asB64(),
    ddatabase: jspb.Message.getField(msg, 4)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.Mount}
 */
proto.Mount.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.Mount;
  return proto.Mount.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.Mount} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.Mount}
 */
proto.Mount.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setKey(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setVersion(value);
      break;
    case 3:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setHash(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setHypercore(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.Mount.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.Mount.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.Mount} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Mount.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {!(string|Uint8Array)} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeBytes(
      1,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeUint64(
      2,
      f
    );
  }
  f = /** @type {!(string|Uint8Array)} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeBytes(
      3,
      f
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeBool(
      4,
      f
    );
  }
};


/**
 * required bytes key = 1;
 * @return {!(string|Uint8Array)}
 */
proto.Mount.prototype.getKey = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * required bytes key = 1;
 * This is a type-conversion wrapper around `getKey()`
 * @return {string}
 */
proto.Mount.prototype.getKey_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getKey()));
};


/**
 * required bytes key = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getKey()`
 * @return {!Uint8Array}
 */
proto.Mount.prototype.getKey_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getKey()));
};


/** @param {!(string|Uint8Array)} value */
proto.Mount.prototype.setKey = function(value) {
  jspb.Message.setField(this, 1, value);
};


proto.Mount.prototype.clearKey = function() {
  jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.Mount.prototype.hasKey = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional uint64 version = 2;
 * @return {number}
 */
proto.Mount.prototype.getVersion = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {number} value */
proto.Mount.prototype.setVersion = function(value) {
  jspb.Message.setField(this, 2, value);
};


proto.Mount.prototype.clearVersion = function() {
  jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.Mount.prototype.hasVersion = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional bytes hash = 3;
 * @return {!(string|Uint8Array)}
 */
proto.Mount.prototype.getHash = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * optional bytes hash = 3;
 * This is a type-conversion wrapper around `getHash()`
 * @return {string}
 */
proto.Mount.prototype.getHash_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getHash()));
};


/**
 * optional bytes hash = 3;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getHash()`
 * @return {!Uint8Array}
 */
proto.Mount.prototype.getHash_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getHash()));
};


/** @param {!(string|Uint8Array)} value */
proto.Mount.prototype.setHash = function(value) {
  jspb.Message.setField(this, 3, value);
};


proto.Mount.prototype.clearHash = function() {
  jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.Mount.prototype.hasHash = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional bool ddatabase = 4;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.Mount.prototype.getHypercore = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 4, false));
};


/** @param {boolean} value */
proto.Mount.prototype.setHypercore = function(value) {
  jspb.Message.setField(this, 4, value);
};


proto.Mount.prototype.clearHypercore = function() {
  jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.Mount.prototype.hasHypercore = function() {
  return jspb.Message.getField(this, 4) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.Stat = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.Stat, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.Stat.displayName = 'proto.Stat';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.Stat.prototype.toObject = function(opt_includeInstance) {
  return proto.Stat.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.Stat} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Stat.toObject = function(includeInstance, msg) {
  var f, obj = {
    mode: jspb.Message.getField(msg, 1),
    uid: jspb.Message.getField(msg, 2),
    gid: jspb.Message.getField(msg, 3),
    size: jspb.Message.getField(msg, 4),
    blocks: jspb.Message.getField(msg, 5),
    offset: jspb.Message.getField(msg, 6),
    byteoffset: jspb.Message.getField(msg, 7),
    mtime: jspb.Message.getField(msg, 8),
    ctime: jspb.Message.getField(msg, 9),
    linkname: jspb.Message.getField(msg, 10),
    mount: (f = msg.getMount()) && proto.Mount.toObject(includeInstance, f),
    metadataMap: (f = msg.getMetadataMap()) ? f.toObject(includeInstance, undefined) : []
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.Stat}
 */
proto.Stat.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.Stat;
  return proto.Stat.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.Stat} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.Stat}
 */
proto.Stat.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setMode(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setUid(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setGid(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setSize(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setBlocks(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setOffset(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setByteoffset(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setMtime(value);
      break;
    case 9:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setCtime(value);
      break;
    case 10:
      var value = /** @type {string} */ (reader.readString());
      msg.setLinkname(value);
      break;
    case 11:
      var value = new proto.Mount;
      reader.readMessage(value,proto.Mount.deserializeBinaryFromReader);
      msg.setMount(value);
      break;
    case 12:
      var value = msg.getMetadataMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readBytes, null, "");
         });
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.Stat.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.Stat.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.Stat} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Stat.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {number} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeUint32(
      2,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeUint32(
      3,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeUint64(
      4,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 5));
  if (f != null) {
    writer.writeUint64(
      5,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 6));
  if (f != null) {
    writer.writeUint64(
      6,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 7));
  if (f != null) {
    writer.writeUint64(
      7,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 8));
  if (f != null) {
    writer.writeUint64(
      8,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 9));
  if (f != null) {
    writer.writeUint64(
      9,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 10));
  if (f != null) {
    writer.writeString(
      10,
      f
    );
  }
  f = message.getMount();
  if (f != null) {
    writer.writeMessage(
      11,
      f,
      proto.Mount.serializeBinaryToWriter
    );
  }
  f = message.getMetadataMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(12, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeBytes);
  }
};


/**
 * required uint32 mode = 1;
 * @return {number}
 */
proto.Stat.prototype.getMode = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.Stat.prototype.setMode = function(value) {
  jspb.Message.setField(this, 1, value);
};


proto.Stat.prototype.clearMode = function() {
  jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.Stat.prototype.hasMode = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional uint32 uid = 2;
 * @return {number}
 */
proto.Stat.prototype.getUid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {number} value */
proto.Stat.prototype.setUid = function(value) {
  jspb.Message.setField(this, 2, value);
};


proto.Stat.prototype.clearUid = function() {
  jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.Stat.prototype.hasUid = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional uint32 gid = 3;
 * @return {number}
 */
proto.Stat.prototype.getGid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/** @param {number} value */
proto.Stat.prototype.setGid = function(value) {
  jspb.Message.setField(this, 3, value);
};


proto.Stat.prototype.clearGid = function() {
  jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.Stat.prototype.hasGid = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional uint64 size = 4;
 * @return {number}
 */
proto.Stat.prototype.getSize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/** @param {number} value */
proto.Stat.prototype.setSize = function(value) {
  jspb.Message.setField(this, 4, value);
};


proto.Stat.prototype.clearSize = function() {
  jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.Stat.prototype.hasSize = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional uint64 blocks = 5;
 * @return {number}
 */
proto.Stat.prototype.getBlocks = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/** @param {number} value */
proto.Stat.prototype.setBlocks = function(value) {
  jspb.Message.setField(this, 5, value);
};


proto.Stat.prototype.clearBlocks = function() {
  jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.Stat.prototype.hasBlocks = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional uint64 offset = 6;
 * @return {number}
 */
proto.Stat.prototype.getOffset = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/** @param {number} value */
proto.Stat.prototype.setOffset = function(value) {
  jspb.Message.setField(this, 6, value);
};


proto.Stat.prototype.clearOffset = function() {
  jspb.Message.setField(this, 6, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.Stat.prototype.hasOffset = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional uint64 byteOffset = 7;
 * @return {number}
 */
proto.Stat.prototype.getByteoffset = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/** @param {number} value */
proto.Stat.prototype.setByteoffset = function(value) {
  jspb.Message.setField(this, 7, value);
};


proto.Stat.prototype.clearByteoffset = function() {
  jspb.Message.setField(this, 7, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.Stat.prototype.hasByteoffset = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional uint64 mtime = 8;
 * @return {number}
 */
proto.Stat.prototype.getMtime = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/** @param {number} value */
proto.Stat.prototype.setMtime = function(value) {
  jspb.Message.setField(this, 8, value);
};


proto.Stat.prototype.clearMtime = function() {
  jspb.Message.setField(this, 8, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.Stat.prototype.hasMtime = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional uint64 ctime = 9;
 * @return {number}
 */
proto.Stat.prototype.getCtime = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 9, 0));
};


/** @param {number} value */
proto.Stat.prototype.setCtime = function(value) {
  jspb.Message.setField(this, 9, value);
};


proto.Stat.prototype.clearCtime = function() {
  jspb.Message.setField(this, 9, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.Stat.prototype.hasCtime = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional string linkname = 10;
 * @return {string}
 */
proto.Stat.prototype.getLinkname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 10, ""));
};


/** @param {string} value */
proto.Stat.prototype.setLinkname = function(value) {
  jspb.Message.setField(this, 10, value);
};


proto.Stat.prototype.clearLinkname = function() {
  jspb.Message.setField(this, 10, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.Stat.prototype.hasLinkname = function() {
  return jspb.Message.getField(this, 10) != null;
};


/**
 * optional Mount mount = 11;
 * @return {?proto.Mount}
 */
proto.Stat.prototype.getMount = function() {
  return /** @type{?proto.Mount} */ (
    jspb.Message.getWrapperField(this, proto.Mount, 11));
};


/** @param {?proto.Mount|undefined} value */
proto.Stat.prototype.setMount = function(value) {
  jspb.Message.setWrapperField(this, 11, value);
};


proto.Stat.prototype.clearMount = function() {
  this.setMount(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.Stat.prototype.hasMount = function() {
  return jspb.Message.getField(this, 11) != null;
};


/**
 * map<string, bytes> metadata = 12;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,!(string|Uint8Array)>}
 */
proto.Stat.prototype.getMetadataMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,!(string|Uint8Array)>} */ (
      jspb.Message.getMapField(this, 12, opt_noLazyCreate,
      null));
};


proto.Stat.prototype.clearMetadataMap = function() {
  this.getMetadataMap().clear();
};


goog.object.extend(exports, proto);
