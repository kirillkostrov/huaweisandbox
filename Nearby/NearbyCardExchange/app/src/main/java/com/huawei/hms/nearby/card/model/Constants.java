/*
 * Copyright 2020. Huawei Technologies Co., Ltd. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

package com.huawei.hms.nearby.card.model;

/**
 * Constants
 *
 * @since 2020-06-04
 */
public class Constants {
    /**
     * My card store key.
     */
    public static final String MY_CARD_KEY = "my_card";

    /**
     * My favorites store key.
     */
    public static final String MY_FAVORITES_KEY = "my_favorites";

    /**
     * Edit card information request code.
     */
    public static final int EDIT_REQUEST_CODE = 0;

    /**
     * Bluetooth error
     */
    public static final String BLUETOOTH_ERROR =
            "Bluetooth is invalid! Turn on Bluetooth and run this app again.";
    /**
     * Network error
     */
    public static final String NETWORK_ERROR =
            "No Internet access! Make sure you have Internet access and run this app again.";

    /**
     * Gps error
     */
    public static final String LOCATION_SWITCH_ERROR =
            "Location is invalid! Turn on Location and run this app again.";

    /**
     * Location error
     */
    public static final String LOCATION_ERROR =
            "Location permision is denied! Make sure you have Location permision and run this app again.";

    private Constants() {
    }
}
